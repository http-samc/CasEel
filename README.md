# ⚡ CasEel ⚡
A Chrome Extension for autosaving NetMath notebooks!

CasEel adds autosaving functionality to the [NetMath](https://courseware.illinois.edu) platform, which provides interactive digital courses in a variety of math levels and integrates Mathematica as a calculator.

Unfortunately, hard work can be lost in an instant if you forget to save manually. That's why I created CasEel, the autosaver for NetMath.

CasEel automatically calls the save function every `90 seconds`, meaning that at most you have just over a minute's worth of work to lose.

It's free to use and available on the Chrome Webstore.

## Legal Disclaimers
CasEel is not associated with, nor endorsed by, the University of Illinois. "NetMath" is the registered trademark of the Board of Trustees of the University of Illinois.

This software is released under the BSD 3 Clause license. You may use it commercially, modify the code, distribute the code, and place warranty on the code. You may not Trademark the code nor hold Samarth Chitgopekar, CasEel, or any contributors liable. You **must** include credit (Copywright 2021 Samarth Chitgopekar) and include the license ("LICENSE") which you should read for more details.

## Contributing
If you can help acomplish any of the TODO's, please make a PR!

However, CasEel was made specifically for autosaving. There are other great tools, like [AutoCCM](https://github.com/gabeclasson/Auto-CCM) that already implement other quality of life features!

Both of these can coexist as two separate extensions, so there's no need to reinvent the wheel.

## TODO
- Reimplement (functioning) custom save intervals
  - limited at `30 sec.` due to concerns of low-delays crashing servers
  - removed due to less-than-optimal communication times between `popup.html`/`popup.js` and `background.js`
- Better background script error handling
- Up manifest to v3
- Automatically save on tab close, even if the running interval isn't up yet