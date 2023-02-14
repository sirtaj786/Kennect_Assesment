
//write an implementation of getElementById which performs the same  basic task as that of actual getElementById(dont use shortcuts like queryselector)

function dom(id) {
    const elements = document.getElementsByTagName('*');

    for (let i = 0; i < elements.length; i++) {
      if (elements[i].id === id) {
        return elements[i];
      }
    }
  
    return null;
  }