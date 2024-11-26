// utils/distance.ts

/**
 * Calculates the distance between two points on Earth using the Haversine formula
 * @param lat1 Latitude of first point in degrees
 * @param lon1 Longitude of first point in degrees
 * @param lat2 Latitude of second point in degrees
 * @param lon2 Longitude of second point in degrees
 * @param unit 'K' for kilometers, 'M' for miles, 'N' for nautical miles
 * @returns Distance in specified unit
 */
export function calculateDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
    unit: 'K' | 'M' | 'N' = 'K'
  ): number {
    const R = unit === 'K' ? 6371 : unit === 'M' ? 3956 : 3440; // Radius of earth in km, miles, or nautical miles
    
    const lat1Rad = (lat1 * Math.PI) / 180;
    const lon1Rad = (lon1 * Math.PI) / 180;
    const lat2Rad = (lat2 * Math.PI) / 180;
    const lon2Rad = (lon2 * Math.PI) / 180;
  
    const dLat = lat2Rad - lat1Rad;
    const dLon = lon2Rad - lon1Rad;
  
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1Rad) * Math.cos(lat2Rad) * 
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
  
    return Math.round(distance * 100) / 100; // Round to 2 decimal places
  }
  
  // Example usage with your map component:
  interface Location {
    lat: number;
    lng: number;
    address: string;
  }
  
  interface LocationWithDistance extends Location {
    distance?: number;
  }
  
  // Function to find nearby locations within a certain radius
  export function findNearbyLocations(
    currentLocation: Location,
    otherLocations: Location[],
    maxDistance: number, // in kilometers
  ): LocationWithDistance[] {
    return otherLocations
      .map(location => ({
        ...location,
        distance: calculateDistance(
          currentLocation.lat,
          currentLocation.lng,
          location.lat,
          location.lng
        )
      }))
      .filter(location => location.distance <= maxDistance)
      .sort((a, b) => (a.distance || 0) - (b.distance || 0));
  }