const { remote, shell } = require('electron');

const template = [
  {
    label: 'Items',
    submenu: [
      {
        label: 'Add New',
        accelerator: 'CmdorCtrl+O',
        click() {
          $('.open-add-modal').click();
        }
      },
      {
        label: 'Read item',
        accelerator: 'CmdOrCtrl+Enter',
        click() {
          window.openItem();
        }
      },
      {
        label: 'Delete item',
        accelerator: 'CmdOrCtrl+Backspace',
        click() {
          window.deleteItem();
        }
      },
      {
        label: 'Open in Browser',
        accelerator: 'CmdOrCtrl+Shift+Enter',
        click() {
          window.openInBrowser();
        }
      },
      {
        type: 'separator'
      },
      {
        label: 'Search items',
        accelerator: 'CmdOrCtrl+S',
        click() {
          $('#search').focus();
        }
      }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      { role: 'pasteandmatchstyle' },
      { role: 'delete' },
      { role: 'selectall' }
    ]
  },
  {
    role: 'window',
    submenu: [{ role: 'minimize' }, { role: 'close' }]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click() {
          shell.openExternal('https://electron.atom.io');
        }
      }
    ]
  }
];

if (process.platform === 'darwin') {
  template.unshift({
    label: remote.app.getName(),
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'services', submenu: [] },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideothers' },
      { role: 'unhide' },
      { type: 'seprator' },
      { role: 'quit' }
    ]
  });

  template[3].submenu ==
    [
      { label: 'Close', accelerator: 'CmdOrCtrl+W', role: 'close' },
      { label: 'Minimize', accelerator: 'CmdOrCtrl+M', role: 'minimize' },
      { label: 'Zoom', role: 'zoom' },
      { label: 'Bring all to front', role: 'front' }
    ];
}

const menu = remote.Menu.buildFromTemplate(template);
remote.Menu.setApplicationMenu(menu);
