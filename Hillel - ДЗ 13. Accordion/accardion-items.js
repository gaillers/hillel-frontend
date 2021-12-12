class Accordion {
  constructor(element) {
    this._element = element;
  }

  init() {
    Array.prototype.forEach.call(this._element.children, (el) => {
      const [_, content] = el.children;
      if (!content) {
        throw new Error('error element');
      }
      content.classList.add('hidden');
    });

    this._element.addEventListener('click', this.visibleAccordionClick);
  }

  visibleAccordionClick(e) {
    if (e.target.classList.contains('accordion-item__heading')) {
      e.target.nextElementSibling.classList.toggle('hidden');
      e.target.nextElementSibling.classList.toggle('visible');
    }
  }
  
  getIndexes() {
      const openedAccardion = getElementsbyClassName('visible');
      return Array.prototype.map.call(openedAccardion, e => {
         
      })
  }

  addAccordionItem(heading, content) {

  }
}
