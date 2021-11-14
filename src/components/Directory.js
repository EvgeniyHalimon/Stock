import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import Store from '../store/DirectoryStore';
import { Container, InputGroup, Alert, Form, ListGroup, Spinner} from 'react-bootstrap';
import {Pagination} from './Pagination';
import Post from './Post';
import shortid from 'shortid'
import {DebounceInput} from 'react-debounce-input'

const store = new Store()

export const Directory = observer(() => {
    const [isSearching, setIsSearching] = useState(false)
    async function getDirectory(){
        const data = await axios.get('https://api.iextrading.com/1.0/ref-data/symbols')
        store.setCompanies(data.data)
        setIsSearching(true)
    }

    useEffect(() => {
        getDirectory()
    }, [])

    return(
        <Container>
            <Form>
                <InputGroup size="lg">
                    <DebounceInput
                        className='form-control'
                        debounceTimeout={300}
                        value={store.companyName}
                        type='text'
                        onChange={(e) => store.setCompanyName(e.target.value)}
                    />
                </InputGroup>
            </Form>
            <Container>
                {!isSearching && <Spinner id='spinner' animation="border" role="status"></Spinner>}
                {store.companyName ?
                <ListGroup>
                {store.filterCompany.map(item => 
                    <ListGroup.Item id="post" key={shortid.generate()}>
                        <h1>{item.symbol}</h1>
                        <p>{item.name}</p>
                    </ListGroup.Item> 
                )}
                </ListGroup> : 
                <Alert variant='danger'>You must enter company name</Alert>
            }
            </Container>
            <Pagination
                data={store.companies}
                RenderComponent={Post}
                title="List of companies"
            />
        </Container>
    )
})

