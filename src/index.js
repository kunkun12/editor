
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Image from '@ckeditor/ckeditor5-image/src/image';


class InsertImage extends Plugin {
    constructor(props){
      super(props)
    }
    init() {
        console.log( 'InsertImage was initialized' );
    }
}


ClassicEditor
    .create( document.querySelector( '#root' ), {
        plugins: [ Essentials, Paragraph, Bold, Italic,Image,InsertImage],
        toolbar: [ 'bold', 'italic' ]
    } )
    .then( editor => {
        console.log( 'Editor was initialized', editor );
    } )
    .catch( error => {
        console.error( error.stack );
    } );