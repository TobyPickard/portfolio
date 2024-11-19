import { Card, CardContent, Typography } from "@mui/material";

interface InfoCardProps {
    title: string,
    lines: string[]
}

export default function InfoCard({ title, lines } : InfoCardProps) {
    return (
        <Card>
            <CardContent>
                <div style={{ display: 'flex' }}>
                    <div>
                        <Typography variant="h6">
                            {title}
                        </Typography>
                        {lines.map((item) => (
                            <Typography variant="body1" color="text.secondary">{item}</Typography>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
