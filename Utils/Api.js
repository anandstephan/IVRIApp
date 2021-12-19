const baseUrl = 'http://192.168.1.52:3002/'

//Authentication API's
export const loginUrl = baseUrl + 'login';
export const registrationUrl = baseUrl + 'register';

//New Call API
export const fetchSpeciesUrl = baseUrl + 'species';
export const fetchProblemUrl = (id) => {
    return (
        baseUrl + 'problem/' + id
    )
}
export const fetchProblemDetailUrl = (id) => {
    return (
        baseUrl + 'problemDetail/' + id
    )
}
export const saveProblemUrl = baseUrl + 'add/saveProblem'

//Doctors list url
export const fetchDoctorsListUrl = () => {
    return (
        baseUrl + 'doctor'
    )
}