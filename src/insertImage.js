
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import Image from '@ckeditor/ckeditor5-image/src/image';
import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import ModelElement from '@ckeditor/ckeditor5-engine/src/model/element';
export default class InsertImage extends Plugin {
    constructor(props){
      super(props)
    }
    init() {
        const editor = this.editor;

        editor.ui.componentFactory.add( 'insertImage', locale => {
            const view = new ButtonView( locale );

            view.set( {
                label: 'Insert image',
                icon: imageIcon,
                tooltip: true
            } );

            // Callback executed once the image is clicked.
            view.on( 'execute', () => {
                console.log(this.editor.getData())
                const imageURL = prompt( 'Image URL' );
                editor.document.enqueueChanges( () => {
                const imageElement = new ModelElement( 'image', {
                    src: imageURL
                } );

        // Insert the image in the current selection location.
                editor.data.insertContent( imageElement, editor.document.selection );
            } );
            } );

            return view;
        } );
    }
}


