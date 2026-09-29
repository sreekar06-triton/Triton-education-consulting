export const FLIGHT_ROUTES = [
  {
    id: "fl-101",
    airline: "Emirates",
    flightNumber: "EK-507 / EK-003",
    logo: "✈️",
    fromCity: "Mumbai (BOM)",
    toCity: "London Heathrow (LHR)",
    departure: "04:30 AM",
    arrival: "14:15 PM",
    duration: "13h 15m (1 Stop)",
    priceINR: 48500,
    priceUSD: 580,
    class: "Student Economy (Extra 10kg Baggage)",
    baggage: "2 x 23kg + 10kg Student Allowance",
    refundable: true,
    tags: ["Student Special", "Extra Baggage", "Free Date Change"]
  },
  {
    id: "fl-102",
    airline: "Uzbekistan Airways",
    flightNumber: "HY-422",
    logo: "✈️",
    fromCity: "Delhi (DEL)",
    toCity: "Tashkent (TAS)",
    departure: "08:15 AM",
    arrival: "11:30 AM",
    duration: "3h 45m (Direct Non-Stop)",
    priceINR: 24200,
    priceUSD: 290,
    class: "Economy Comfort",
    baggage: "30kg Check-in + 7kg Cabin",
    refundable: true,
    tags: ["Direct Flight", "Fastest Route", "Student Discount"]
  },
  {
    id: "fl-103",
    airline: "Qatar Airways",
    flightNumber: "QR-557 / QR-015",
    logo: "✈️",
    fromCity: "Delhi (DEL)",
    toCity: "Boston Logan (BOS)",
    departure: "03:45 AM",
    arrival: "16:20 PM",
    duration: "18h 05m (1 Stop Doha)",
    priceINR: 69400,
    priceUSD: 830,
    class: "Student Flex Economy",
    baggage: "2 x 23kg Check-in",
    refundable: true,
    tags: ["Student Club", "Wi-Fi Onboard", "Flex Booking"]
  },
  {
    id: "fl-104",
    airline: "Lufthansa",
    flightNumber: "LH-761",
    logo: "✈️",
    fromCity: "Bengaluru (BLR)",
    toCity: "Munich (MUC)",
    departure: "01:20 AM",
    arrival: "07:40 AM",
    duration: "9h 50m (Direct Non-Stop)",
    priceINR: 52000,
    priceUSD: 620,
    class: "Economy Light",
    baggage: "1 x 23kg Check-in + 8kg Cabin",
    refundable: false,
    tags: ["Direct Flight", "European Gateway"]
  }
];

// Architectural Schema for future Cleartrip API integration
export const CLEARTRIP_API_SCHEMA = {
  endpoint: "https://api.cleartrip.com/v2/flights/search",
  authMethod: "Bearer OAuth2.0 Token (Server-to-Server)",
  samplePayload: {
    tripType: "ONE_WAY",
    passengers: {
      adults: 1,
      students: 1,
      discountType: "STUDENT_EXCLUSIVE"
    },
    origin: "BOM",
    destination: "LHR",
    travelDate: "2026-09-01",
    preferredCabin: "ECONOMY",
    partnerRefId: "TRITON-STUDENT-PORTAL-v1"
  },
  responseFormat: {
    status: 200,
    resultCount: 24,
    flightsKey: "airfare_search_results"
  }
};
