import type { ClimbingGymDTO } from '../../shared/api/types/climbing-gyms';

export function ClimbingGyms({
    climbingGyms,
}: {
    climbingGyms: ClimbingGymDTO[];
}) {
    return (
        <div>
            {climbingGyms.map(climbingGym => (
                <ClimbingGym key={climbingGym.id} climbingGym={climbingGym} />
            ))}
        </div>
    );
}

function ClimbingGym({ climbingGym }: { climbingGym: ClimbingGymDTO }) {
    return <div>ClimbingGym id: {climbingGym.id}</div>;
}
