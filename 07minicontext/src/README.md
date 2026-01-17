1. To use conetxt api, first create a file for it in which you will use Raect.createConetxt()  and store it in a var
2. we need to create jsx file for making it top level fragment which is accessible to all
3.'children' is a generic name which passes anything coming to it as it is
4.UserContext.Provider provides the data and to provide any data to it we need a state. an swe need to tell from data data is to be received is value={{user, setUser}}
5. To fetch values in userContext we need help from useContext hook