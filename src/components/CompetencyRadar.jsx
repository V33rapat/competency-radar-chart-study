import { RadarChart } from '@mui/x-charts/RadarChart';

export default function CompetencyRadar() {
    return (
        <RadarChart
            height = {300}
            series = {[{ label : 'ความสามารถ', data: [50, 70, 80, 60, 90, 75] }]}
            radar = {{
                max : 100,
                metrics : ['การสื่อสาร', 'การทำงานเป็นทีม', 'การแก้ปัญหา', 'ความยืดหยุ่น', 'การนำ', 'ความคิดสร้างสรรค์'],
            }}
        />
    );
}