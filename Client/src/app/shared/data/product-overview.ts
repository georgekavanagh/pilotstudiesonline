export class productsDB {
    static ProductOverview = [
        {
            id: 1,
            images: ['assets/images/courses/air-law.jpg', 'assets/images/products/02-2.png', 'assets/images/products/02-3.png'],
            name: 'PPL Air Law',
            description:"After taking this course, the student will have a better undertanding of laws and procedures that govern every flight."+
            "The student will be able to make out the legal requiremens that have to be met before each flight. This will not only make a safer pilot, but also a pilot that is able to recognise and understand the CATS and CARS in the South African Avaition Legislation and how they apply to their flight.",
            chapters:[
                {name:"International Civil Aviation Organisation",subChapters:[]},
                {name:"Aviation Law in South Africa",subChapters:["Aviation Accidents & Investigations","Pilot Licensing","Medical Certification","General Aviation & Associated Flight Rules","Aerodromes"]},
                {name:"Civil Aviation Technical Standards (CATS)",subChapters:[]},
                {name:"Civil Aviation Regulations (CARS)",subChapters:[]},
            ],
            coursePrice: 100,
            mockExamPrice: 99,
            bundlePrice: 250,
            rating: 4.3,
            feedback: 27,
            category: 'PPL',
        },
        {
            id: 2,
            images: ['assets/images/courses/principles-of-flight.jpg', 'assets/images/products/01-2.png', 'assets/images/products/01-3.png'],
            name: 'PPL Principles of Flight',
            description:"After taking this course, the student will have a better undertanding of how an aircraft actually flies."+
            "The student will learn about core concepts such as drag and lift and how they are effected by different factors such as density.This course also covers how to calculate an aircrafts weight & balance which is an essential task that every pilot needs to know.",
            chapters:[
                {name:"Newtons Law of motion",subChapters:[]},
                {name:"How does an aircraft fly?",subChapters:["Lift","Lift Augmentation","Mechanics of flight"]},
                {name:"Types of drag",subChapters:[]},
                {name:"Weight & stability",subChapters:[]},
                {name:"Flight controls & their effects",subChapters:[]},
                {name:"Load factors",subChapters:[]},
            ],
            coursePrice: 100,
            mockExamPrice: 99,
            bundlePrice: 250,
            rating: 4.5,
            feedback: 25,
            category: 'PPL',
        },
        {
            id: 3,
            images: ['assets/images/courses/atg.jpg', 'assets/images/products/01-2.png', 'assets/images/products/01-3.png'],
            name: 'PPL Aircraft Technical & General',
            description:"After taking this course, the student will have a better undertanding of how aircraft systems work."+
            "The student will cover various topics from engine operation and fault finding, to fuel systems to the electrical system and everything in between.",
            chapters:[
                {name:"Aircraft Structure & undercarriage",subChapters:[]},
                {name:"Instruments",subChapters:["Types","Vacuum","Hydraulics"]},
                {name:"Engine Operations",subChapters:["Oil System","Carburetor","Four stroke cycle"]},
                {name:"Propeller Operation",subChapters:[]},
                {name:"Fuel system",subChapters:[]},
                {name:"Electric system",subChapters:[]},
                {name:"Magnetos",subChapters:[]},
            ],
            coursePrice: 100,
            mockExamPrice: 99,
            bundlePrice: 250,
            rating: 4.9,
            feedback: 33,
            category: 'PPL',
        },
        {
            id: 4,
            images: ['assets/images/courses/meteorology.jpg', 'assets/images/products/02-2.png', 'assets/images/products/02-3.png'],
            name: 'PPL Meteorology',
            description:"After taking this course, the student will have a better undertanding of the atmosphere and how it effects each flight."+
            "The student will learn about global and south african weather patterns and how to identify them as well as important concepts like how density, altitude and temperature effects aircraft performance and many more.",
            chapters:[
                {name:"Atmosphere",subChapters:[]},
                {name:"Altitude, temperature and density effects",subChapters:[]},
                {name:"Types of winds",subChapters:[]},
                {name:"Air Masses & Fronts",subChapters:[]},
                {name:"Types of precipitation",subChapters:[]},
                {name:"Thunderstorms",subChapters:[]},
                {name:"Visibility & Icing",subChapters:[]},
                {name:"Different types of turbulence",subChapters:[]},
                {name:"How to read METARS' & TAFS'",subChapters:[]},
                {name:"How to read metereorology charts",subChapters:[]},
            ],
            coursePrice: 100,
            mockExamPrice: 99,
            bundlePrice: 250,
            rating: 4.6,
            feedback: 45,
            category: 'PPL',
        },
        {
            id: 5,
            images: ['assets/images/courses/flight-planning.jpeg', 'assets/images/products/01-2.png', 'assets/images/products/01-3.png'],
            name: 'PPL Flight Planning & Performance',
            description:"After taking this course, the student will have a better undertanding of how to plan each flight in order to ensure safety."+
            "The student will learn about the different factors that effect performance of the aircraft and if the conditions allow for a safe flight.The student will also learn how to calculate the necessary fuel requirements for a flight as well as mass & balance.",
            chapters:[
                {name:"Fuel & Associated Calculations",subChapters:[]},
                {name:"Mass & Balance",subChapters:[]},
                {name:"Runways",subChapters:[]},
                {name:"Performance",subChapters:["Airframe configurations","Weight","Performance Graphs","Weather"]},
            ],
            coursePrice: 100,
            mockExamPrice: 99,
            bundlePrice: 250,
            rating: 4.8,
            feedback: 32,
            category: 'PPL',
        },
        {
            id: 6,
            images: ['assets/images/courses/human-factors.jpg', 'assets/images/products/01-2.png', 'assets/images/products/01-3.png'],
            name: 'PPL Human Factors',
            description:"After taking this course, the student will have a better undertanding of how our physiology effects our performance in the cockpit."+
            "The student will learn about factors that can negatively effect our body during flight and how to mitigate these factors in order to be safer pilots.",
            chapters:[
                {name:"Hypoxia and its effects",subChapters:[]},
                {name:"Decompression and its effects",subChapters:[]},
                {name:"Carbon monoxide",subChapters:[]},
                {name:"Effects of flight on our eyes & ears",subChapters:[]},
                {name:"Fatigue",subChapters:[]},
                {name:"Physical fitness and performance",subChapters:[]},
                {name:"Phycology",subChapters:["Stress and how it effects us","Personality types","CRM"]},
            ],
            coursePrice: 100,
            mockExamPrice: 99,
            bundlePrice: 250,
            rating: 5,
            feedback: 19,
            category: 'PPL',
        },
        {
            id: 7,
            images: ['assets/images/courses/navigation.jpg', 'assets/images/products/01-2.png', 'assets/images/products/01-3.png'],
            name: 'PPL Navigation',
            description:"After taking this course, the student will have a better undertanding of practical navigation and how to read and plot routes on aviation charts.The student will learn about preflight navigation planningas well as how to calculate and measure distance and bearings.",
            chapters:[
                {name:"Aviation Map Essentials",subChapters:["Rhumbline","Convergency","Great Circles","Bearings"]},
                {name:"Map Plotting",subChapters:[]},
                {name:"Flight Computer",subChapters:[]},
                {name:"Direction & Cardinal Pionts",subChapters:[]},
                {name:"Distance",subChapters:[]},
                {name:"Map Projections",subChapters:[]},
                {name:"Sunrise & Sunset",subChapters:[]},
                {name:"Time & GMT",subChapters:[]},
                {name:"Preflight Planning",subChapters:["Weight","Fuel"]},
                {name:"Dead Reckoning",subChapters:[]},
                {name:"Radio Navigation",subChapters:["VOR","NDB & ADF","DME"]},
                {name:"GPS",subChapters:[]},
                {name:"Radar & Transponders",subChapters:[]},
                {name:"What to do if you are lost",subChapters:[]},
            ],
            coursePrice: 100,
            mockExamPrice: 99,
            bundlePrice: 250,
            rating: 4.7,
            feedback: 25,
            category: 'PPL',
        },
        {
            id: 8,
            images: ['assets/images/courses/radio.jpg', 'assets/images/products/01-2.png', 'assets/images/products/01-3.png'],
            name: 'PPL Restricted Radio',
            coursePrice: 100,
            mockExamPrice: 99,
            bundlePrice: 250,
            rating: 5,
            feedback: 32,
            category: 'PPL',
        },
        {
            id: 9,
            images: ['assets/images/courses/night-rating.jpg', 'assets/images/products/02-2.png', 'assets/images/products/02-3.png'],
            name: 'Night Rating',
            description:"After taking this course, the student will have a better undertanding of the aspects and procedures associated with night flying.The student will learn about the requirements that have to be met in order to get a night rating. The student will learn about aircraft and runway lighting and the different illusions that occur during night flying and how to recognise them",
            chapters:[
                {name:"Night Rating Requirements",subChapters:[]},
                {name:"Aircraft Lights",subChapters:[]},
                {name:"Airport & taxiway Lights",subChapters:[]},
                {name:"Illusions",subChapters:[]},
                {name:"Spatial Disorientation",subChapters:[]},
            ],
            coursePrice: 100,
            mockExamPrice: 99,
            bundlePrice: 250,
            rating: 5,
            feedback: 15,
            category: 'other',
        }
    ]
}
