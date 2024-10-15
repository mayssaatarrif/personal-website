// Generating pages for 468 total pages with 5 events per page
const generateMockEvents = () => {
    const events = [];
    for (let i = 1; i <= 468; i++) {
      const pageEvents = [];
      for (let j = 1; j <= 5; j++) {
        const eventNumber = (i - 1) * 5 + j;
        pageEvents.push({
          image: `image${100 + eventNumber}.jpg`,
          title: `Event ${eventNumber}: Cultural Event ${eventNumber}`,
          date: `Date ${eventNumber}`,
          description: `Description for Event ${eventNumber}.`,
        });
      }
      events.push({ page: i, events: pageEvents });
    }
    return events;
  };
  
  const eventsPaginated = generateMockEvents();
  
  export default eventsPaginated;
  