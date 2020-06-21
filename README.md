# fnReport-en
This generates a printable Fortnite report which currently contains Battle Royale news, Save The World news, the current map, stats about any Epic user name given and the daily shop (minus the emotes).
This uses fortniteapi.io to fetch data and the pdfmake library to make the PDF.

## Usage
First, open index.html in a plaintext editor of your choice. In order to use this, you have to register an account at fortniteapi.io. After logging in, go to dashboard.fortniteapi.io and copy your API key. Enter it into the index.html source where a comment tells you to put the API key (currently it's line 29).

Next, open index.html in your web browser and put ?user=YourEpicAccountName (replace YourEpicAccountName with your Epic account name) at the end of what is in your address bar. It now generates your PDF report which you can archive and print out.

If you don't pass the user argument, 'null' will be used as the Epic account name which works for some reason. Even if you pass an invalid user name, it will work, but it won't create the matches pages.

If your matches page is empty, you either haven't played for a long time or you have set your Fortnite stats to private.
