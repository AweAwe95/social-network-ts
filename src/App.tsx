import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Messages} from "./components/Messages/Messages";
import {addPost, StateTypes} from "./redux/state";

type AppPropsTypes = {
    state: StateTypes
    addPost:(newPostMessage: string) => void
}

function App(props: AppPropsTypes) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render={() => <Profile profilePageData={props.state.profilePageData} addPost={props.addPost}/>}/>
                    <Route path={'/messages'} render={() => <Messages messagesPageData = {props.state.messagesPageData}/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
