# What the Diff

Written with ChatGPT, A Chrome extension that connects to ChatGPT to provide a summary explanation and code review suggestions for pull requests on GitHub.

## Installation

1. Clone or download the repository.
2. Open Google Chrome and navigate to chrome://extensions.
3. Check the box for "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the repository folder.

## Usage

1. Navigate to a pull request on GitHub.
2. Click the "What the Diff?" button in your Chrome extensions.
3. The extension will extract the "diff" and provide line numbers, then send that information to ChatGPT to generate a summary explanation and code review suggestions that will be displayed in a new tab.

## Dependencies

- [ChatGPT](https://openai.com/api/gpt/)
- [GitHub API](https://developer.github.com/v3/)

## Contributing

If you would like to contribute to the development of GPT-Diff-Explainer, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
