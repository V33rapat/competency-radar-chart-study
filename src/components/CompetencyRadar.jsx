import { RadarChart } from '@mui/x-charts/RadarChart';

export default function CompetencyRadar() {
    return (
        <RadarChart
            height = {300}
            series = {[{ label : 'Competency', data: [50, 70, 80, 60, 90, 75] }]}
            radar = {{
                max : 100,
                metrics : ['Communication', 'Teamwork', 'Problem Solving', 'Adaptability', 'Leadership', 'Creativity' ],
            }}
        />
    );
}