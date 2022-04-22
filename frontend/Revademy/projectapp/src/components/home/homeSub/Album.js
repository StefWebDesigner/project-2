import React, {Fragment, useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";


let Album = () => {

    // const [images, setImages] = useState([]);
    // const [loaded, setIsLoaded] = useState(false);

    // useEffect(() => {
    //
    //    fetchImages();
    //
    // }, [])

    // const fetchImages = (count = 10) => {
    //
    //     // axios
    //     //     .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
    //     //     .then (res => {
    //     //         setImages([...images, ...res.data]);
    //     //         setIsLoaded(true);
    //     //     });
    // };

    return (
        <>
            <section>
                <Container>
                    <h2 className="text-center">Album</h2>
                    <p className="text-center">Waiting to add picture and get pictures from the database</p>

                    {/*<InfiniteScroll*/}
                    {/*    next={() => fetchImages(5)}*/}
                    {/*    hasMore={true}*/}
                    {/*
                    {/*    dataLength={}*/}
                    {/*>*/}
                    {/*    <Fragment>*/}
                    {/*        {*/}
                    {/*            loaded*/}
                    {/*               ? images.map((image, index) => (*/}
                    {/*                    <
                    {/*                    />*/}
                    {/*                ))*/}
                    {/*                : "" }*/}
                    {/*        }*/}
                    {/*    </Fragment>*/}
                    {/*</InfiniteScroll>*/}
                </Container>
            </section>







        </>
    );
};

export default Album;
