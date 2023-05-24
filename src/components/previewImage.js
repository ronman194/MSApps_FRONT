import React from 'react';

//component that display the image after the modal open 

function PreviewImage(props) {

    return (
        <div class="flex justify-center items-center h-screen">
            <div class="bg-white shadow-lg rounded-lg p-6 w-80 relative">
                <button onClick={props.close} className="close-modal-btn"> {/*button to close the modal */}
                    X
                </button>
                <div class="flex justify-center">
                    <img src={props.photo.webformatURL} alt={props.photo.tags} className="preview-image" />
                </div>
                <div class="mt-4">
                    <h3 class=" text-center text-xl font-semibold">Image Details</h3>
                    <div className='flex justify-center'> 
                        <div class="mt-4 content-center">
                            <p>User: <b>{props.photo.user}</b></p>
                            <p >Views: <b>{props.photo.views}</b></p>
                            <p>Downloads: <b>{props.photo.downloads}</b></p>
                            <p>Likes: <b>{props.photo.likes}</b></p>
                            <p>Collections: <b>{props.photo.collections}</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PreviewImage;
