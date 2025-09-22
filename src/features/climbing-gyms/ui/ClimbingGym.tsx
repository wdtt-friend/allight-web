import type { ClimbingGymDTO } from "@/entities/climbing-gyms/model/climbing-gyms-types";

export function ClimbingGym({ climbingGym }: { climbingGym: ClimbingGymDTO }) {
    return <div>ClimbingGym id: {climbingGym.id}</div>;
}