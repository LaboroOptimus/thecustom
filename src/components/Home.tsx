import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/rootReducer';
import { getUsers } from '../redux/thunk'

const Home = () => {
    const dispatch = useDispatch()
    const users = useSelector((state:RootState) => state.counter.users)

    useEffect(()=> {
        dispatch(getUsers())
    }, [dispatch])

    return <h1>Home {users.title}</h1>
}

export default Home;