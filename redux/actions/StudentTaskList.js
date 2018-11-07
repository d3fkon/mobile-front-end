import axios from '../../axios-instance';
import * as actions from '../index';

export const fetchStudentsTeamedWith = (jwt) =>(dispatch) => {
    return axios ({
        method : 'get',
        url : 'student_task/list',
        headers: { AUTHORIZATION: "Bearer " + jwt }
    })

    .then(response => dispatch(actions.addStudentsTeamedWith(response.data.studentsTeamedWith)))
    .catch(error => console.log(error));
    
}

export const fetchStudentTasks = (jwt) =>(dispatch) => {
    return axios({
        method: 'get',
        url: 'student_task/list',
        headers: { AUTHORIZATION: "Bearer " + jwt }
    })
    .then(response => dispatch(actions.addStudentTasks(response.data.studentTasks)))
    .catch(error => console.log(error));   
}

export const addStudentsTeamedWith = (studentsTeamedWith) => ({
    type: actions.ADD_STUDENTSTEAMEDWITH,
    payload: studentsTeamedWith
});

export const addStudentTasks = (studentTasks) => ({
    type: actions.ADD_STUDENTTASKS,
    payload: studentTasks
});

