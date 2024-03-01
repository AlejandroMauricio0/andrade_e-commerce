import { useEffect, useState } from 'react';

function Barleft({ setChangeImg, content }) {

    const [imageDescription, setImageDescription] = useState([]);

    const getImage = async () => {
        const url = `http://192.168.100.71:3003/Admin/viewImageArray/${content.image_fk}`;

        try {
            let response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            setImageDescription(data.images);

        } catch (error) {
            console.error('Error al obtener productos:', error);
            alert('Error al obtener productos:', error);
        }
    }
    console.log("images", content);

    const styles = {
        ul: {
            listStyleType: 'none',
            margin: 0,
            padding: 0,
        },
        li: {
            div: {
                display: 'block',
                width: '60px',
                border: '1px solid #CDCDCD',
                padding: '4px'
            },
        },
    };



    const changeImg = (img) => {
        setChangeImg(img);
    }


    useEffect(() => {
        getImage();

        changeImg(content.image)
    }, []);

    // us

    return (
        <>
            <div className="center">
                <div className=''>
                    <ul className='ul-img' style={styles.ul}>
                        <li className='p-2'>
                            <div style={styles.li.div} >

                                <img src={imageDescription[0]} alt="" width={"50x"} onClick={() => changeImg(imageDescription[0])} />
                            </div >
                        </li>

                        <li className='p-2'>
                            <div style={styles.li.div} className='border border-2'>

                                <img src={imageDescription[1]} alt="" width={"50x"} onClick={() => changeImg(imageDescription[1])} />
                            </div>
                        </li>
                        <li className='p-2'>
                            <div style={styles.li.div} >
                                <img src={imageDescription[2]} alt="" width={"50x"} onClick={() => changeImg(imageDescription[2])} />
                            </div>
                        </li>
                        <li className='p-2'>
                            <div style={styles.li.div} >
                                <img src={imageDescription[3]} alt="" width={"50x"} onClick={() => changeImg(imageDescription[3])} />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Barleft;