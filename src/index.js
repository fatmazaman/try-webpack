const buttton = document.createElement('buttton');
buttton.innerText = 'Click me';
buttton.onclick = () => {
  System.import('./image_viewer').then(module => {
    module.default();
  });
};

document.body.appendChild(buttton);
