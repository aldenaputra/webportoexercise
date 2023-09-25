

export function composeEmail(recipientEmail: string) {
    const recipientName = 'Alden';
    const subject = 'Greetings.';
    const body = `Hello, ${recipientName}!`;
    const emailLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(emailLink, '_blank');
}

