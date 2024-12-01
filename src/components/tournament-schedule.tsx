"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { slideIn } from "@/lib/animations";

const schedule = [
    {
        day: "Day 1",
        date: "May 15",
        events: [
            { time: "9:00 AM", description: "Opening Ceremony" },
            { time: "10:00 AM", description: "Preliminary Rounds Begin" },
            { time: "6:00 PM", description: "Day 1 Matches End" },
        ],
    },
    {
        day: "Day 2",
        date: "May 16",
        events: [
            { time: "9:00 AM", description: "Round of 32" },
            { time: "2:00 PM", description: "Round of 16" },
            { time: "6:00 PM", description: "Day 2 Matches End" },
        ],
    },
    {
        day: "Day 3",
        date: "May 17",
        events: [
            { time: "10:00 AM", description: "Quarter Finals" },
            { time: "3:00 PM", description: "Semi Finals" },
            { time: "7:00 PM", description: "Day 3 Matches End" },
        ],
    },
    {
        day: "Day 4",
        date: "May 18",
        events: [
            { time: "2:00 PM", description: "Finals" },
            { time: "5:00 PM", description: "Award Ceremony" },
            { time: "6:00 PM", description: "Closing Ceremony" },
        ],
    },
];

export default function TournamentSchedule() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {schedule.map((day, dayIndex) => (
                <motion.div
                    key={day.day}
                    variants={slideIn}
                    initial="hidden"
                    animate="visible"
                    custom={dayIndex}
                >
                    <Card className="p-6">
                        <h3 className="text-xl font-bold mb-2">{day.day}</h3>
                        <p className="text-muted-foreground mb-4">{day.date}</p>
                        <ul className="space-y-3">
                            {day.events.map((event, eventIndex) => (
                                <li
                                    key={eventIndex}
                                    className="flex items-start space-x-3"
                                >
                                    <span className="text-sm font-medium text-muted-foreground">
                                        {event.time}
                                    </span>
                                    <span className="text-sm">
                                        {event.description}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
}
