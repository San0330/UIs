function draw() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d')

    let x = 80;
    let y = 90;

    let radius = 75

    let gpa = 3.5
    gpa = Math.min(4, gpa)
    let minDegree = 0;
    let maxDegree = (gpa * 45)

    let maxDegreeInradian = (maxDegree * Math.PI) / 180
    let minDegreeInradian = (minDegree * Math.PI) / 180

    let px, py

    for (let i = minDegreeInradian; i < maxDegreeInradian; i += 0.03) {
        px = x - radius * Math.sin(i);
        py = y - radius * Math.cos(i);

        let hueValue = ((i * 180) / Math.PI)

        let color = `hsl(${hueValue}, 50%, 50%)`

        ctx.beginPath()
        ctx.arc(py, px, 4, 0, Math.PI * 2, true);
        ctx.strokeStyle = color
        ctx.fillStyle = color;
        ctx.stroke();
        ctx.fill()
    }

    ctx.save()

    ctx.beginPath()
    ctx.font = '36px serif';
    ctx.textAlign = "center";
    ctx.fillStyle = '#6100b6'
    ctx.fillText(gpa.toString(), y, x - 10);

    ctx.restore()

    ctx.beginPath()
    ctx.translate(y, x); // translate context to center of rainbow circle
    ctx.rotate(maxDegreeInradian); // rotate upto max rotation from center of rainbow circle
    ctx.translate(-y, -x); // translate context back

    let rectHeight = 7
    let rectWidth = 20

    ctx.rect(y - radius - (rectWidth / 2), x - (rectHeight / 2), rectWidth, rectHeight);

    ctx.stroke();
    ctx.fill()
}

draw()
