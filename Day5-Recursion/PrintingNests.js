const print = function(array)
{
	array.forEach((item) =>
	{
		if (Array.isArray(item))
		{
			print(item);
		}
		else
		{
		console.log(item);
		}
	});
}

const array = ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]];
