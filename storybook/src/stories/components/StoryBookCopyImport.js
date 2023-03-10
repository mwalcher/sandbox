const styleBlock = document.createElement('template')
styleBlock.innerHTML = `
    <style>
        storybook-copy-import {
            display: block;
            margin: 2rem 0;
        }

        .storybook-ui-copy-import {
            position: relative;
            display: inline-flex;
            align-items: center;
            background-color: #f8f8f8;
            padding: 0.5rem;
            border: 2px solid #212121;
            border-radius: 4px;
        }

        .storybook-ui-copy-import:before,
        .storybook-ui-copy-import:after {
            position: absolute;
            bottom: 50%;
            left: 100%;
            transform: translate(0, 50%);
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out,
                transform 0.2s cubic-bezier(0.71, 1.7, 0.77, 1.24);
            pointer-events: none;
            z-index: 10;
        }

        .storybook-ui-copy-import:before {
            content: '';
            border: 0.5rem solid transparent;
            border-right-color: #339933;
            margin-left: -1rem;
        }

        .storybook-ui-copy-import:after {
            content: 'Copied!';
            color: white;
            background-color: #339933;
            padding: 0.5rem;
            border-radius: 4px;
        }

        .storybook-ui-copy-import.copied:before,
        .storybook-ui-copy-import.copied:after {
            transform: translate(1.2rem, 50%);
            visibility: visible;
            opacity: 1;
        }

        .storybook-ui-copy-import > * {
            margin: 0;
        }

        .storybook-ui-copy-import-button {
            color: white;
            background-color: #339933;
            padding: 0.5rem 1rem;
            margin-left: 2rem;
            border: 0;
            border-radius: 9999px;
            cursor: pointer;
            transition: background-color 0.125s ease-out;
        }

        .storybook-ui-copy-import-button:hover,
        .storybook-ui-copy-import-button:focus {
            background-color: #267226;
        }

        #copy-import-id {
            background-color: rgba(51, 153, 51, 0.1);
            padding: 0.5rem 1rem;
            border-radius: 4px;
        }
    </style>
`

/**
 * Custom Web Component to add a box to copy the import statement
 * which we can then use in our Storybook docs
 *
 * Limitations: Markdown cannot be used as content
 * It needs to be HTML
 *
 * Example usage:
 *
 * ```html
 * <storybook-copy-import>
 *   <p>import Button from '@mwalcher/components/Button.vue';</p>
 * </storybook-copy-import>
 * ```
 *
 */
class StoryBookCopyImport extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.parentElement.appendChild(styleBlock.content.cloneNode(true))

    const wrapper = document.createElement('div')
    const button = document.createElement('button')
    const wrapperClasses = ['storybook-ui-copy-import']
    const buttonClasses = ['storybook-ui-copy-import-button']
    const importId = 'copy-import-id'

    wrapper.classList.add(...wrapperClasses)
    button.type = 'button'
    button.innerText = 'Copy Import'
    button.classList.add(...buttonClasses)
    button.onclick = async () => {
      const text = document.getElementById(importId).innerHTML
      try {
        await navigator.clipboard.writeText(text)
        wrapper.classList.add('copied')
        setTimeout(() => {
          wrapper.classList.remove('copied')
        }, '2000')
      } catch (err) {
        console.error('Failed to copy: ', err)
      }
    }

    // note, not attaching to shadow root so that all
    // storybook docs CSS and custom class names added
    // to html elements can be passed through and styled
    while (this.firstElementChild) {
      this.firstElementChild.id = importId
      wrapper.appendChild(this.firstElementChild)
    }
    wrapper.appendChild(button)
    this.appendChild(wrapper)
  }
}

customElements.define('storybook-copy-import', StoryBookCopyImport)
