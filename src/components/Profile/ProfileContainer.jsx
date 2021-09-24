import React from "react";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {Profile} from "./Profile";
import {withRouter} from "react-router";
import {getUserProfile} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = 2
        }
        getUserProfile(userId).then(data => {
            this.props.setUserProfile(data)
        })
    }


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePageData.profile
    }
}

let ProfileContainerWithUrlData = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(ProfileContainerWithUrlData)