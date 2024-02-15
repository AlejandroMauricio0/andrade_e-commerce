import img1 from '../assets/images/simodrive/2.jpg'
import img2 from '../assets/images/simodrive/3.jpg'
import img3 from '../assets/images/simodrive/4.jpg'
import img4 from '../assets/images/simodrive/5.jpg'



function Barleft() {

    const styles = {
        ul: {
            listStyleType: 'none',
            margin: 0,
            padding: 0,
        },
        li: {
            a: {
                display: 'block',
                width: '60px',
                border: '1px solid #CDCDCD' ,
                // backgroundColor: '#dddddd',
            },
        },
    };


    return (
        <>
            <div className=" center ">
                <ul style={styles.ul}>
                    <li>
                        <a style={styles.li.a} href="#home">
                            <img src={img1} alt="" width={"50x"} />
                        </a >
                    </li>
                    <li>
                        <a style={styles.li.a} href="#news">

                            <img src={img2} alt="" width={"50x"} />
                        </a>
                    </li>
                    <li>
                        <a style={styles.li.a} href="#contact">
                            <img src={img3} alt="" width={"50x"} />
                        </a>
                    </li>
                    <li>
                        <a style={styles.li.a} href="#about">
                            <img src={img4} alt="" width={"50x"} />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Barleft;