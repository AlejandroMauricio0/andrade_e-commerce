import { useEffect } from 'react';
import img1 from '../assets/images/simodrive/1.jpg'
import img2 from '../assets/images/simodrive/3.jpg'
import img3 from '../assets/images/simodrive/4.jpg'
import img4 from '../assets/images/simodrive/5.jpg'


// const img1 = 'https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/NisAAOSwd9Njzk7v/$_57.PNG?set_id=880000500F'

function Barleft({ setChangeImg, content }) {

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
                // backgroundColor: '#dddddd',
            },
        },
    };


    const changeImg = (img) => {
        setChangeImg(img);
    }


    useEffect(() => {
        changeImg(content.image)
        // console.log("iamgenn", content.image);
    }, []);
    return (
        <>
            <div className=" center ">
                <ul style={styles.ul}>
                    <li className='pt-2'>
                        <div style={styles.li.div} >
                            <img src={img1} alt="" width={"50x"} onClick={() => changeImg(img1)} />
                        </div >
                    </li>
                    <li className='pt-2'>
                        <div style={styles.li.div} className='border border-2'>

                            <img src={img2} alt="" width={"50x"} onClick={() => changeImg(img2)} />
                        </div>
                    </li>
                    <li className='pt-2'>
                        <div style={styles.li.div} >
                            <img src={img3} alt="" width={"50x"} onClick={() => changeImg(img3)} />
                        </div>
                    </li>
                    <li className='pt-2'>
                        <div style={styles.li.div} >
                            <img src={img4} alt="" width={"50x"} onClick={() => changeImg(img4)} />
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Barleft;