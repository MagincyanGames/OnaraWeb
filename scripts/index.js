function load()
{ 
  hideForm();
  var descripcionSection = document.getElementById('descripcion');
  descripcionSection.style.display = 'none';
  
  
  var title = document.getElementById('titulo');
  title.style.display="none";
  

  var header = document.getElementById('header');
  header.style.margin="0px";
  header.style.padding="0px";
  header.style.width="100%";

    header = document.getElementById('ul');
  header.style.margin="0px";
  header.style.padding="0px";
  header.style.paddingBottom="0.6em";


  var lis = document.getElementsByClassName('li');
  for(let i = 0; i<lis.length;i++)
  {
        lis[i].style.fontSize='0.75em';
        lis[i].style.padding='1em';
  }

  var brid = document.getElementsByClassName('brid');
  for(let i = 0; i<brid.length;i++)
  {
    var brElement = brid[i];
    var space = document.createTextNode(' ');

    brElement.parentNode.replaceChild(space, brElement);
  }

  
  var liElements = document.querySelectorAll('li'); // Selecciona todos los elementos <li>

  liElements.forEach(function(liElement) {
    var liAfterElement = window.getComputedStyle(liElement, '::after'); // Obtiene las propiedades calculadas del pseudo-elemento

    // Modifica el estilo del pseudo-elemento ::after
    liElement.style.setProperty('--li-after-width', "2px");
    liElement.style.setProperty('--li-after-height', "30px");
  });


}

function loadForm()
{
  load();
  // Mostrar el iframe
  var iframe = document.getElementById('formulario');
  iframe.style.display = 'block';
}

function loadTeams()
{
  load();
  // Mostrar el iframe
  var iframe = document.getElementById('teams');
  iframe.style.display = 'block';
}


function hideForm()
{
    var iframe = document.getElementById('formulario');
    iframe.style.display = 'none';
    var iframe = document.getElementById('teams');
    iframe.style.display = 'none';
    var descripcionSection = document.getElementById('descripcion');
    descripcionSection.style.display = 'block';

}