function dom(id) {
    const elements = document.getElementsByTagName('*');

    for (let i = 0; i < elements.length; i++) {
      if (elements[i].id === id) {
        return elements[i];
      }
    }
  
    return null;
  }