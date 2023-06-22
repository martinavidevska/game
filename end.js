
const jsConfetti = new JSConfetti();
    let i=0
for (i=0; i<5;i++){
    jsConfetti.addConfetti({
    }).then(() => jsConfetti.addConfetti())
    .then(() => jsConfetti.addConfetti())
}