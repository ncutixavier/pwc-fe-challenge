export const formatDateRange = (checkin, checkout) => {
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);

    const checkinMonth = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(checkinDate);
    const checkoutMonth = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(checkoutDate);

    const checkinDay = checkinDate.getDate();
    const checkoutDay = checkoutDate.getDate();

    if (checkinDate.getMonth() === checkoutDate.getMonth()) {
        return `${checkinMonth} ${checkinDay} - ${checkoutDay}`;
    } else {
        return `${checkinMonth} ${checkinDay} - ${checkoutMonth} ${checkoutDay}`;
    }
}

export const getListingImages = (link, incre) => {
    const parts = link.split('/');

    if (parts.length < 3) {
        return [link];
    }

    const result = Array(8).fill().map((_, index) => {
        const updatedLink = parts.slice();
        updatedLink[updatedLink.length - 3] = (parseInt(parts[parts.length - 3]) + index * incre).toString();
        return updatedLink.join('/');
    });

    return result.slice(1);
}