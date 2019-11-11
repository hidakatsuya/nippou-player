# NIPPOU Player for esa.io

[![](https://github.com/hidakatsuya/nippou-player/workflows/Test/badge.svg)](https://github.com/hidakatsuya/nippou-player/actions?query=branch%3Amaster)

A client for playing NIPPOU in [esa.io](https://esa.io).

<p align="center">
  <img src="image.png" width="400" />
</p>

## Getting Started

### Installing

1. Go to https://hidakatsuya.github.io/nippou-player/
2. Install by performing "Add to Home or Application"

I recommend changing the size to a vertically long size.

### Setup

1. Go to the settings page
2. Register esa API access token
3. Register search path for NIPPOU articles

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/hidakatsuya/nippou-player.

## Development

```bash
$ npm install
$ npm run serve
```

## Todos & Known Issues

- Bug
  - Pause does not work in mobile (Confirmed with Android Chrome)
- Enhancement
  - Speech improvement using [SSML](https://cloud.google.com/text-to-speech/docs/ssml?hl=ja)
  - Support remote speech API such as [IBM Watson Text to Speech](https://www.ibm.com/watson/jp-ja/developercloud/text-to-speech.html)
- Development
  - Test improvement
  - TypeScript
  - Auto deployment

## Copyright

2017 &copy; Katsuya HIDAKA. See MIT-LICENSE for further details.
