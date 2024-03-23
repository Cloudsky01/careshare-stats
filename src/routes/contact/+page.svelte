<script>
    let name = '';
    let email = '';
    let message = '';

    function handleSubmit() {
        // Handle form submission logic here
        console.log('Form submitted!');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
    }
</script>

<main>
    <h1>Contact Us</h1>

    <form on:submit={handleSubmit}>
        <label>
            Name:
            <input type="text" bind:value={name} />
        </label>

        <label>
            Email:
            <input type="email" bind:value={email} />
        </label>

        <label>
            Message:
            <textarea bind:value={message}></textarea>
        </label>

        <button type="submit">Submit</button>
    </form>
</main>

<style>
    /* Add your custom styles here */
</style>