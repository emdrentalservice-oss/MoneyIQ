import React from 'react'
import ReactDOM from 'react-dom/client'
import MoneyIQ from './MoneyIQ.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MoneyIQ />
  </React.StrictMode>
)
```

4. Click **Commit changes** → **Commit changes**

5. Now go back to the repo main page, click **Add file** → **Upload files**

6. But first — you need to put the file in the `src` folder. So instead, click **Add file** → **Create new file**

7. In the filename box, type: **src/MoneyIQ.jsx**

8. Now open the **moneyiq-lean-mvp.jsx** file from your downloads on your computer — open it with Notepad (right-click → Open with → Notepad)

9. Select ALL the text (Ctrl+A), copy it (Ctrl+C)

10. Paste it (Ctrl+V) into the GitHub editor

11. Click **Commit changes** → **Commit changes**

**After both files are created, your repo should show:**
```
.gitignore
README.md
index.html
package.json
src/
  main.jsx
  MoneyIQ.jsx
vite.config.js
