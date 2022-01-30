class Accordion {
  constructor(element) {
    this._element = element;
  }

  init() {
    this._toContentAll((content, el, i) => {
      content.classList.add('hidden');
      el.setAttribute('data-id', i);
    })

    this._element.addEventListener('click', this.visibleAccordionClick);
  }


  visibleAccordionClick(e) {
    e.target.nextElementSibling.classList.toggle('hidden');
    e.target.nextElementSibling.classList.toggle('visible');
  }
  
  _toggleContent(e){
    e.classList.toggle('hidden');
    e.classList.toggle('visible');
  }

  _toContentAll(cb) {
    Array.prototype.forEach.call(
      this._element.children, (parent, index) => {
        const [_, content] = parent.children;
        if (!content) {
          throw new Error('error element');
        }
       
        cb(content, parent, index)
    });
  }

  getIndexes() {
      const openedAccardion = getElementsByClassName('visible');
      return Array.prototype.map.call(openedAccardion, e => {
        return +e.perentElement.dataset['id'];
      })
  }

  openItem(index) {
    const item = this._element.querySelector(`div[data-id="${index}"]`);
    item.children[1].classList.remove('hidden')
    item.children[1].classList.add('visible')
  }

  addAccordionItem(heading, content) {
      const headerEl = document.createElement('div')
      headerEl.classList.add('accordion-item__heading');
      headerEl.innerHTML = heading;

      const contentEl = document.createElement('div')
      contentEl.classList.add('accordion-item__content', 'hidden');
      contentEl.innerHTML = content;

      const itemEl = document.createElement('div');
      itemEl.classList.add('accordion-item');
      itemEl.append(headerEl, contentEl);
      itemEl.setAttribute('data-id', this._element.children.length);

      this._element.append(itemEl);
  }

 
  openAll(){
    this._toContentAll (e => {
      e.classList.contains('hidden') && this._toggleContent(e);
    })
  }

  closeAll(){
    this._toContentAll(e => {
      e.classList.contains('visible') && this._toggleContent(e);
    })
  }
}
