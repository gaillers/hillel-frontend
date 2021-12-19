const render = (template, bind) => {
   let result = template;

   Object.keys(bind).forEach(e => {
      result = result.replaceAll(`{{${e}}}`, bind[e]);
   });

   return result;
}