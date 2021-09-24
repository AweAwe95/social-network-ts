import p from "../Profile.module.css";
import React from "react";
import {Preloader} from "../../common/Preloader/Preloader";

export function ProfileInfo(props) {
    if (!props.profile){
        return <Preloader/>
    }
    return <>
        <div>
            <img src="https://gamemag.ru/images/cache/Reviews/Reviews1726/92f0dfdd74-2_1390x600.jpg"
                 className={p.profilePageImg} alt=""/>
        </div>
        <div>
            <img src={props.profile.photos.small} alt=""/>
        </div>
    </>;
}