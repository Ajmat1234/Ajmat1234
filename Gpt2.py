from transformers import GPT2LMHeadModel, GPT2Tokenizer, Trainer, TrainingArguments
from datasets import load_dataset

# Model aur tokenizer load karo
model_name = "gpt2"  # "gpt2-medium", "gpt2-large", "gpt2-xl" bhi use kar sakte ho
tokenizer = GPT2Tokenizer.from_pretrained(model_name)
model = GPT2LMHeadModel.from_pretrained(model_name)
