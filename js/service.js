export const Services =  {
    storeUser: function (user) {
        const localData = this.getUser();
        if (localData) {
            const allUsers = [...localData, user];
            const strData = JSON.stringify(allUsers);
            localStorage.setItem('user', strData);
            const myLenght = allUsers.length;
            return myLenght;
        }
        else {
            const allUsers = [user];
            const strData = JSON.stringify(allUsers);
            localStorage.setItem('user', strData);
            const myLenght = allUsers.length;
            return myLenght;
        }
    },
    getUser: function () {
        const localData = JSON.parse(localStorage.getItem('user'));
        return localData;
    },
    storeSession: function (getUserData) {
        sessionStorage.setItem('getUserData', JSON.stringify(getUserData));
    },
    getSession: function () {
        const sessionData = JSON.parse(sessionStorage.getItem('getUserData'));
        return sessionData;
    },
    findLoginUser: function (findEmail){
        const localData = this.getUser();
        const localFind = localData.find(findItem);
        function findItem(item) {
            return item.emailValue === findEmail
        }
        return localFind;
    },
    findSigninUser: function (findEmail){
        const localData = this.getUser();
        const localFind = localData.find(findItems);
        function findItems(item) {
            return item.emailValue === findEmail
        }
        return localFind;
    }
}