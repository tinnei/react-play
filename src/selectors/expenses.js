// timestamps (milliseconds)
// positive: forward in time
// negative: backward in time
// 0 means January 1st 1970 (unix epoch)
import moment from 'moment';

// Get visible expense
export default (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount? 1 : -1;
        }
    })
};