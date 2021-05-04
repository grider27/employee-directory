import axios from "axios";
const BASEURL =
    "https://randomuser.me/api/?results=25&nat=fr&seed=foobar&exc=login,registered";

const exportedObject = {
    getEmployeeList: function () {
        return axios.get(BASEURL);
    },
};
export default exportedObject;