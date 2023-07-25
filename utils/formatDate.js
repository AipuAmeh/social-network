
const myDate =  (date) => {
    const formattedDate = `${new Date(date).getMonth() +1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
   console.log(formattedDate);
}


