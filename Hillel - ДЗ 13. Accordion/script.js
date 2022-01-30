const mainAccordion = new Accordion(document.getElementById("accordion"));
mainAccordion.init();
// mainAccordion.getIndexes(1);

mainAccordion.addAccordionItem('Testing', '<p>Content lorem inpulse</p>');

setTimeout(() => {
   mainAccordion.openAll();
}, 1000);

setTimeout(() => {
   mainAccordion.closeAll();
}, 2000)
