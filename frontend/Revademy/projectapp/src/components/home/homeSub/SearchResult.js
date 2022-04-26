import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import ExperimentalNav from "../../navbar/ExperimentalNav";

const SearchResult = () => {

    const [getInfo, setGetInfo] = useState([]);
    const [search, setSearch] = useState('');
    const [searchFields, setSearchFields] = useState('');
    const [resultsNotFound, setResultsNotFound] = useState(false);

    const navigator = useNavigate();

    //GET THE RESULTS FROM THE DATABASE
    async function searchResultsByGame() {
        await axios.get(url).then((response) => {
            setGetInfo(response,data);
            if (response.data.length === 0) {
                setResultsNotFound(true)
            } else {
                setResultsNotFound(false)
            }
        })
    }

    //GET RESULTS FROM EVENTS


    //GET RESULTS FROM OTHER STUFF


    return (
        <>
            {/*<ExperimentalNav/>*/}
            {/*<h1>Result Page</h1>*/}

            {/*<input.Group>*/}
            {/*    <Form.Select>*/}
            {/*        <option>Games</option>*/}
            {/*        <option>Games</option>*/}
            {/*    </Form.Select>*/}

            {/*</input.Group>*/}



        </>
    );
};

export default SearchResult;