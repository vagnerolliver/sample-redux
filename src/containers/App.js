import React, { Component } from 'react'
import Footer from "../components/Footer";
import CoursesContainer from "./CoursesContainer";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as CoursesActions from '../store'

class App extends Component {
    componentDidMount() {
        console.log('PROPS', this.props)
        const { courses, actions } = this.props

        if(!courses.length) {
            actions.requestAllCourses()
        }
    }

    render() {
        return (
            <div>
                <h2>Course Cart Example</h2>
                <hr/>
                <CoursesContainer />
                <hr/>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    courses: state.courses,
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(CoursesActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
